import DesktopSidebar from "@/components/DesktopSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const AssignmentPage = () => {
  return (
    <div className="flex min-h-screen gap-6 px-8 py-4">
      <div className="w-1/6  max-sm:hidden">
        <DesktopSidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex-1">Main content</div>
        <Footer />
      </div>
    </div>
  );
};

export default AssignmentPage;
