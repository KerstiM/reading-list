import { ref } from 'vue'

// firebase imports
import { auth } from '../firebase/config'
import { signInWithEmailAndPassword  } from 'firebase/auth'

const error = ref(null)
const isLoading = ref(false)

const login = async (email, password) => {
  error.value = null
  isLoading.value = true

  try {
    const res = await signInWithEmailAndPassword(auth, email, password)
    if (!res) {
      throw new Error('Could not login')
    }
    
    error.value = null
    isLoading.value = false
  }
  catch(err) {
    console.log(err.message)
    error.value = err.message
    isLoading.value = false
  }
}

const useLogin = () => {
  return { error, isLoading, login }
}

export default useLogin