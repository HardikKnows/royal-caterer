import { connectDB } from "../../../../../lib/db";
import Booking from "../../../../../models/Booking";
import Lead from "../../../../../models/Lead";
import LogoutButton from "./LogoutButton";
import LeadsTable from "../../../components/LeadsTable";

export default async function AdminDashboard() {
  await connectDB();

  const bookings = await Booking.find().sort({ createdAt: -1 }).lean();
  const leads = await Lead.find().sort({ createdAt: -1 }).lean();

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Bookings Dashboard</h1>
            <p className="text-sm text-gray-500">
              Royal Tourism & Caterer – Admin Panel
            </p>
          </div>
          <LogoutButton />
        </div>

        {/* Stats */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard label="Total Bookings" value={bookings.length} />
          <StatCard
            label="Paid"
            value={bookings.filter((b: any) => b.status === "paid").length}
          />
          <StatCard
            label="Pending"
            value={bookings.filter((b: any) => b.status === "pending").length}
          />
          <StatCard
            label="Revenue (₹)"
            value={bookings
              .filter((b: any) => b.status === "paid")
              .reduce((sum: number, b: any) => sum + (b.advanceAmount || 0), 0)}
          />
        </div>

        {/* Recent Bookings Table */}
        <div className="overflow-hidden rounded-xl border bg-white shadow">
          <div className="border-b px-5 py-4 font-medium">Recent Bookings</div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Event</th>
                  <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Guests</th>
                  <th className="px-4 py-3 text-left">Advance</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                      No bookings found.
                    </td>
                  </tr>
                ) : (
                  bookings.map((b: any) => (
                    <tr
                      key={b._id.toString()}
                      className="border-t hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-3">{b.name}</td>
                      <td className="px-4 py-3">{b.eventType}</td>
                      <td className="px-4 py-3">
                        {new Date(b.eventDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-3">{b.guests}</td>
                      <td className="px-4 py-3">₹{b.advanceAmount}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={b.status} />
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ✅ Interactive Leads Table (Status Change Enabled) */}
        <LeadsTable initialLeads={JSON.parse(JSON.stringify(leads))} />
      </div>
    </div>
  );
}

/* Small UI Components */

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  if (status === "paid") {
    return (
      <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
        Paid
      </span>
    );
  }

  if (status === "pending") {
    return (
      <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
        Pending
      </span>
    );
  }

  return (
    <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-700">
      Failed
    </span>
  );
}