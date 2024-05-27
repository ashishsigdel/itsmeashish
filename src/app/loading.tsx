import { HomeLayout } from "@/components/layout";
import { Loader } from "@/components/preloader";

export default function loading() {
  return (
    <div>
      <HomeLayout>
        <div className="px-3 sm:px-4 md:px-5">
          <Loader />
        </div>
      </HomeLayout>
    </div>
  );
}
