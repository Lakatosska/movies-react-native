export const AuthService = {
  async main(variation: 'reg' | 'login', email: string, password: string) {
    const response = await fetch(`http://localhost:3000/${variation}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message || 'Something went wrong');
    }
  }
}