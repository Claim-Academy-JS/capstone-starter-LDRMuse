export default {
  async addAdmin(newAdmin) {
    try {
      const res = await fetch("http://localhost:5000/admin/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAdmin),
      });
      if (res.status > 400) {
        throw new Error("Unable to fetch from server");
      }
      return await res.json();
    } catch (error) {
      throw error;
    }
  },
  async deleteAdmin() {
    const res = await fetch("http://localhost:5000/admin/delete", {
      method: "DELETE",
    });
    return await res.json();
  },

  async addClient(newClient) {
    try {
      const res = await fetch("http://localhost:5000/clients/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newClient),
      });
      if (res.status > 400) {
        throw new Error("Unable to fetch from server");
      }
      return await res.json();
    } catch (error) {
      throw error;
  }},
};
