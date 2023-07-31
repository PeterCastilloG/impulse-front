import { useSession } from "@/shared/hooks/useSession";
import ProfilePage from "@/modules/profile/Profile";
import { IProfileContentPage } from "@/modules/profile/interfaces/profile.interfaces";
import { redirect } from "next/navigation";
import { profilePageContent } from "@/modules/profile/services/profile.services";

export default async function Page() {
  const { user } = await useSession();

  const { data }: { data: IProfileContentPage } = await profilePageContent({
    user_id: user.info.customerId,
    user_token: user.token,
  });

  // if(user.info.registrationStatus === 0){
  //   redirect("/complete-register")
  // }

  return <ProfilePage profilePage={ data } />;
}
