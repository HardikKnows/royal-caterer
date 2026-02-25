export default function ClientsPage() {
    const clients = [
      "Delhi Legislative Assembly",
      "Deputy Commissioner (Revenue), Govt. of NCT of Delhi",
      "Maithili Bhojpuri Academy, Govt. of NCT of Delhi",
      "Ministry of Information & Technology, Govt. of India",
      "DOACC / STPI / C-DAC / CERT-IN / NIC / STQC",
      "Ministry of Communication & IT, Govt. of India",
      "CAPART, Ministry of Rural Development, Govt. of India",
      "Indian Tourism Development Corporation (ITDC), Delhi",
      "Delhi Transco Limited, Delhi",
      "Employees State Insurance Corporation (ESIC), Delhi",
      "Delhi Gujrati Samaj (Regd.), Raj Niwas Marg, Delhi",
      "IGIB (CSIR), Delhi University",
      "NBPGR, Pusa Campus, New Delhi",
      "CEFES (DRDO), Ministry of Defense, Govt. of India",
      "RAC (DRDO), Ministry of Defense, Govt. of India",
      "AIIMS Rishikesh, Uttarakhand",
      "Rural Electrification Corporation Ltd.",
      "Udyog Bhawan, Govt. of India",
      "Election Commission of India",
      "Kadhi Udyog, Delhi",
      "Ministry of Rural Development",
      "Rajiv Bhawan",
      "Rajmata Jijabai ITI, Sri Fort, Delhi",
    ];
  
    return (
      <section className="bg-gray-50 py-24 min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
  
          <div className="text-center mb-16">
            <p className="text-amber-500 uppercase tracking-widest text-sm mb-2">
              Our Esteemed Clients
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold">
              Organizations We Have Served
            </h1>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We are honored to have served leading government bodies, PSUs, and reputed institutions across India.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition border border-gray-100"
              >
                <p className="text-gray-800 font-medium">{client}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }