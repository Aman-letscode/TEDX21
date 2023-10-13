import React from "react";
import Speakercard from "./Speakerinfo/speakercard";
import { FaLinkedin, FaTwitter } from 'react-icons/fa';

const Speakerinfo = () => {
  return (
    <div className="Speakerinfopage">
      <div className="SpeakerCardInfo">
        <Speakercard
          name="Atul Juvle"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107353/TedXFILES/zqm5jikselvrlmjqokac.jpg"
          achievements="Independent Director- GC-Legal Consulting /secondment - Investigations."
          studyInfo="University Of Mumbai(LL.B, M.com, Finance, Corporate Laws, Civil & criminal laws), JBIMS(MMS, Finance), IIM ahmedabad and more"
          shortIntro="3.5 decades of enabling sustaining business operations / strategic decisions/ projects in legally compliant manner."
          linkedin="https://www.linkedin.com/in/atul-juvle-b955b717?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
        />


        <Speakercard
          name="Vittal Ramakrishna"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697105351/TedXFILES/kswrhwpsfjqwf0gweigq.jpg"
          achievements="Founder at POD, Kreate."
          studyInfo="Ph.D. in Computer Science from XYZ University"
          shortIntro="."
          linkedin = "https://www.linkedin.com/in/vittalramakrishna/?utm_source=share&utm_campaign=share_via&u"
        />

        <Speakercard
          name="Akshat Mohite"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107102/TedXFILES/dznszgvndo7agcrm1d1v.jpg"
          achievements="Co-Founder & CES Astroborne Space and Defence Technologies "
          studyInfo="Project PoSSUM advance PoSSUM Academy graduate"
          shortIntro="TEDX GateWay Speaker | Analog Astrounaut| Entrepreneur"
          linkedin = "https://www.linkedin.com/in/cosmoakshat?utm_source=share&utm_campaign=share_via&utm_"
        />

        <div className="bg-white rounded-lg shadow-lg p-4 m-2 md:m-4 lg:m-6 flex flex-col md:flex-row">
          {/* Speaker Photo */}
          <div className="w-full h-full md:w-1/3">
            <img
              src="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107103/TedXFILES/d6m7ljtxsndsmx8e66pa.jpg"
              alt="photo"
              className="max-w-full h-full rounded object-contain"
            />
          </div>

          {/* Speaker Details */}
          <div className="w-full md:w-2/3 md:pl-4">
            <h2 className="text-2xl font-semibold mb-2">Avni Awasthee</h2>
            <div className="mb-4">
              {/* Achievements */}
              <h3 className="text-lg font-medium mb-2">Achievements</h3>
              <p>
                Polar Explorer | Karmaveer Chakra Awardee | Mrs. India Global
                1st Runner-Up .
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Short Introduction</h3>
              <p>Founder of iatthearctic</p>
            </div>
            <br></br>
        <a
            href="https://www.linkedin.com/search/results/all/?keywords=avni%20awasthee&origin=GLOBAL_SEARCH_HEADER&sid=y%3Az"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-600 mr-2"
          >
            <FaLinkedin size={24} /> {/* LinkedIn Icon from react-icons */}
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakerinfo;

