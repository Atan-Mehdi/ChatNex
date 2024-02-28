import Navbar from "@/components/navbar";
import { UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

const DashboardLayout = async ({
  // children :  When you create a component, you can use this prop to put other components, text, or elements inside it. 
  children,
}: {
  children: React.ReactNode // It specifies the expected type for the children prop. In this case, it is declared as React.ReactNode. This type includes all possible types that can be used as children in a React component, such as JSX elements, strings, numbers, fragments, or other React components.
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return (
    <div className="h-full relative justify-between">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
      <main className="md:pl-72">
        <Navbar />

        {children}



      </main>


    </div>
  );
}

export default DashboardLayout;
