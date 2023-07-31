import RegisterPage from "@/modules/auth/register/Register"
import { countries } from "@/modules/auth/register/services/register.services"

export default async function Page() {
  const contriesData = await countries()
    return (
      <RegisterPage countries={contriesData.success ? contriesData.data.items : [] }/>
    )
  }
  