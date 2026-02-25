"use client";
import { useState } from "react";

const STATUS_OPTIONS = ["new", "contacted", "not_interested", "converted"];

const VENUE_LABEL: Record<string, string> = {
  hazard_lounge: "Hazard Lounge",
  eagle_nest: "Eagle Nest",
  skyball: "Skyball (Terrace)",
  restaurant_bar: "Restaurant & Bar",
};

const SLOT_LABEL: Record<string, string> = {
  A: "Slot A (9–3)",
  B: "Slot B (4–12)",
};

export default function LeadsTable({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads);

  const updateStatus = async (id: string, status: string) => {
    const res = await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      alert("Failed to update status");
      return;
    }

    setLeads((prev) =>
      prev.map((l) => (l._id === id ? { ...l, status } : l))
    );
  };

  return (
    <div className="mt-6 sm:mt-8 overflow-hidden rounded-xl border bg-white shadow">
      <div className="border-b px-4 sm:px-5 py-3 sm:py-4 font-medium text-sm sm:text-base">
        Recent Leads
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-[900px] w-full text-xs sm:text-sm">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Name</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Phone</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Event</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Date</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Guests</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">City</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Venue</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Slot</th>
              <th className="px-3 sm:px-4 py-2 sm:py-3 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={9} className="px-4 py-6 text-center text-gray-500">
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead._id} className="border-t hover:bg-gray-50">
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{lead.name}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">{lead.phone}</td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    {lead.eventType || "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3 whitespace-nowrap">
                    {lead.eventDate
                      ? new Date(lead.eventDate).toLocaleDateString()
                      : "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    {lead.guests || "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    {lead.city || "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    {VENUE_LABEL[lead.venue] || "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    {SLOT_LABEL[lead.timeSlot] || "-"}
                  </td>
                  <td className="px-3 sm:px-4 py-2 sm:py-3">
                    <select
                      value={lead.status || "new"}
                      onChange={(e) =>
                        updateStatus(lead._id, e.target.value)
                      }
                      className="rounded border px-2 py-1 text-[11px] sm:text-xs"
                    >
                      {STATUS_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s.replace("_", " ")}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}