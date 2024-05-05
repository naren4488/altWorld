import AssignmentDetailsCard from "@/components/AssignmentDetailsCard";
import CandidateProfileCard from "@/components/CandidateProfileCard";
import DesktopSidebar from "@/components/DesktopSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AssignmentPage = () => {
  return (
    <div className="flex min-h-screen gap-6 px-8 py-4">
      <div className="w-1/6 max-sm:hidden">
        <DesktopSidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1">
          <AssignmentDetailsCard />
          <div className="w-2/3 max-sm:hidden">
            <CandidateProfileCard />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AssignmentPage;
