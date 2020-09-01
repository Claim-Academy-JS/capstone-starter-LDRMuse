export default {
  async addUser(newUser) {
    try {
      const res = await fetch('http://localhost:5000/users/add', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser),
      })
      if (res.status > 400) {
        throw `Unable to fetch from server`
      }
      return await res.json()
    } catch (error) {
      throw new Error(error)
    }

  },
  async deleteUser() {
    const res = await fetch('http://localhost:5000/users/delete', {
      method: 'DELETE',
    })
    return await res.json();
  }
};
