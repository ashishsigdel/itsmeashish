import { HomeLayout } from "@/components/layout";
import { Preloader } from "@/components/preloader";

export default function loading() {
  return (
    <div>
      <HomeLayout>
        <div className="px-3 sm:px-4 md:px-5">
          <Preloader />
        </div>
      </HomeLayout>
    </div>
  );
}
