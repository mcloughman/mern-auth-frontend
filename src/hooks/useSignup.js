import { useState } from "react"
import { useAuthContext } from "./useAuthContext"
import { useNavigate } from "react-router-dom"

const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()

  const signup = async (email, password) => {
    setIsLoading(false)
    setError(null)

    const response = await fetch(
      "https://mern-hikes.herokuapp.com/api/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    )
    // this will send either token info or an error
    const json = await response.json()

    if (!response.ok) {
      setIsLoading(false)
      setError(json.error)
    }
    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json))
      navigate("/")

      // update
      dispatch({ type: "LOGIN", payload: json })
      setIsLoading(false)
    }
  }

  return { signup, isLoading, error }
}

export default useSignup
