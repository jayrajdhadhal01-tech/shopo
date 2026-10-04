import { useState } from "react";
import { User, Mail, Phone, Lock, Save } from "lucide-react";

const AdminProfile = () => {
const [formData, setFormData] = useState({
name: "Shopo Admin",
email: "[admin@shopo.com](mailto:admin@shopo.com)",
phone: "+91 98765 43210",
password: "",
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();

```
if (!formData.name || !formData.email || !formData.phone) {
  alert("Please fill all required fields.");
  return;
}

console.log("Admin Profile:", formData);
alert("Profile updated successfully.");
```

};

return ( <div className="p-4 sm:p-6 lg:p-8"> <div className="mb-6"> <h1 className="text-2xl font-black text-slate-900">
Admin Profile </h1>

```
    <p className="mt-1 text-sm text-slate-500">
      Manage your administrator account.
    </p>
  </div>

  <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
    <section className="h-fit rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
      <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-3xl font-black text-white shadow-lg shadow-blue-600/20">
        SA
      </div>

      <h2 className="mt-4 text-lg font-black text-slate-900">
        Shopo Admin
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Administrator
      </p>

      <span className="mt-4 inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-bold text-green-600">
        Active
      </span>
    </section>

    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-sm font-bold text-slate-700">
            Full Name
          </label>

          <div className="relative">
            <User
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700">
            Email
          </label>

          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700">
            Phone
          </label>

          <div className="relative">
            <Phone
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-bold text-slate-700">
            New Password
          </label>

          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Leave empty to keep current password"
              className="mt-2 h-11 w-full rounded-xl border border-slate-200 pl-11 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
        >
          <Save size={17} />
          Save Changes
        </button>
      </form>
    </section>
  </div>
</div>


);
};

export default AdminProfile;
