import AssignmentDetailsCard from "@/components/AssignmentDetailsCard";
import CandidateProfileCard from "@/components/CandidateProfileCard";
import DesktopSidebar from "@/components/DesktopSidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import candidateDabase from "./../mockDB/mockCandidateData.json";
import { candidate } from "@/types";

const AssignmentPage = () => {
  const [selectedCandidateEmail, setSelectedCandidateEmail] = useState(
    "narendrakajla77@gmail.com",
  );

  const getCurrentCandidateData = (
    currentCandidateEmail: string,
  ): candidate | undefined => {
    const currentCadidate = candidateDabase.candidateData.find(
      (candidate) => candidate.email === currentCandidateEmail,
    );
    return currentCadidate;
  };

  useEffect(() => {
    const shortlistedCandidates = localStorage.getItem("shortlistedCandidates");
    if (!shortlistedCandidates) {
      localStorage.setItem(
        "shortlistedCandidates",
        JSON.stringify(["narendrakajla77@gmail.com"]),
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen gap-6 px-8 py-4">
      <div className="w-1/6 max-sm:hidden">
        <DesktopSidebar />
      </div>
      <div className="flex flex-1 flex-col">
        <Header />
        <div className="flex flex-1 gap-3">
          <AssignmentDetailsCard
            selectedCandidateEmail={selectedCandidateEmail}
            setSelectedCandidateEmail={setSelectedCandidateEmail}
          />
          <div className="w-2/3 max-sm:hidden">
            <CandidateProfileCard
              currentCandidate={getCurrentCandidateData(selectedCandidateEmail)}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AssignmentPage;
