import React from "react";
import Hero_Section from "../components/Course_Progress_Page/Hero_Section";
import Progress_Bar from "../components/Course_Progress_Page/Progress_Bar";
import Progress_Overview from "../components/Course_Progress_Page/Progress_Overview";
import Enrolled_Course_Card from "../components/Course_Progress_Page/Enrolled_Course_Card";
import Completed_Course_Card from "../components/Course_Progress_Page/Completed_Course_Card";
import Course_Card from "../components/Course_Progress_Page/Course_Card";
import Certificate_Card from "../components/Course_Progress_Page/Certificate_Card";
import Learning_Progress_Page_Img from "../assets/images/Learning_Progress_Page_Img.png";
import Learning_Progress_Page_Certificate from "../assets/images/Learning_Progress_Page_Certificate.png";

const Learning_Progress_Page = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero_Section />

      {/* Overall Progress */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-3">Overall Progress</h2>
        <Progress_Bar percentage={65} />
      </section>

      <Progress_Overview />

      {/* Course Progress List */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold mb-4">Course Progress List</h2>

        <h3 className="font-semibold mb-2">Enrolled Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Enrolled_Course_Card
            image={Learning_Progress_Page_Img}
            title="Ui & UX Design"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Start Session"
          />
          <Enrolled_Course_Card
            image={Learning_Progress_Page_Img}
            title="Ui & UX Design"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Start Session"
          />
          <Enrolled_Course_Card
            image={Learning_Progress_Page_Img}
            title="Ui & UX Design"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Start Session"
          />
          <Enrolled_Course_Card
            image={Learning_Progress_Page_Img}
            title="Ui & UX Design"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Start Session"
          />
        </div>

        <h3 className="font-semibold mb-2">Completed Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Completed_Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Certificate"
          />
          <Completed_Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Certificate"
          />
          <Completed_Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Certificate"
          />
        </div>

        <h3 className="font-semibold mb-2">Certificate Gallery</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Certificate_Card image={Learning_Progress_Page_Certificate} />
          <Certificate_Card image={Learning_Progress_Page_Certificate} />
          <Certificate_Card image={Learning_Progress_Page_Certificate} />
        </div>

        <h3 className="font-semibold py-20 text-center">Learn More Courses</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions ·  4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Add To Cart"
          />
          <Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions · 4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Add To Cart"
          />
          <Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions ·  4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Add To Cart"
          />
          <Course_Card
            image={Learning_Progress_Page_Img}
            title="Website Development"
            details="24 Sessions ·  4.3 Ratings"
            description="Worem ipsum dolor sit amet, consectetur adipiscing elit."
            buttonText="Add To Cart"
          />
        </div>
      </section>
    </div>
  );
};

export default Learning_Progress_Page;
