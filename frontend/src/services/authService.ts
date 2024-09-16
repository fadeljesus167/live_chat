const formUrl = `http://localhost:3000/authentication/sessions`

interface FormData {
    username: string;
    password: string;
}


export const loginService = async (formData: FormData) => {
    try {
      const response = await fetch(formUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        if (response.status === 422) {
          throw new Error("Login inválido");
        }
        throw new Error("Error de autenticación");
      }
  
      const result = await response.json();
      return result;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };