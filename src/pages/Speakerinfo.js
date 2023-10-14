import React from "react";
import Speakercard from "./Speakerinfo/speakercard";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

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
          study="studyInfo"
        />

        <Speakercard
          name="Vittal Ramakrishna"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697105351/TedXFILES/kswrhwpsfjqwf0gweigq.jpg"
          achievements="Founder at POD, Kreate."
          studyInfo="Ph.D. in Computer Science from XYZ University"
          shortIntro="."
          linkedin="https://www.linkedin.com/in/vittalramakrishna/?utm_source=share&utm_campaign=share_via&u"
          study="studyInfo"
        />

        <Speakercard
          name="Akshat Mohite"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107102/TedXFILES/dznszgvndo7agcrm1d1v.jpg"
          achievements="Co-Founder & CES Astroborne Space and Defence Technologies "
          studyInfo="Project PoSSUM advance PoSSUM Academy graduate"
          shortIntro="TEDX GateWay Speaker | Analog Astrounaut| Entrepreneur"
          linkedin="https://www.linkedin.com/in/cosmoakshat?utm_source=share&utm_campaign=share_via&utm_"
          study="studyInfo"
        />

        <Speakercard
          name="Nikita sharma"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697279689/TedXFILES/t7hxr8ghhbfyqjplo7ma.jpg"
          achievements="Motivational Speaker | Microbiologist | 6 time-TEDxSpeaker | Body positivity advocate | Founder & director: Silver Linings Organization"
          studyInfo=""
          shortIntro="a renowned speaker, known for 27 influential appearances, 5 TEDx talks, and a passion for empowering youth and advocating important causes."
          linkedin="https://www.linkedin.com/in/cosmoakshat?utm_source=share&utm_campaign=share_via&utm_"
        />

        <Speakercard
          name="Ankita Jain"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697278441/TedXFILES/be3ybwovrdwp2pxgrl1g.jpg"
          achievements="CO-FOUNDER OF GOPAISA.COM"
          studyInfo=""
          shortIntro="a renowned speaker, known for 27 influential appearances, 5 TEDx talks, and a passion for empowering youth and advocating important causes."
          linkedin="https://in.linkedin.com/in/ankita-jain-89b21887"
        />

        <Speakercard
          name="Shubhankar S "
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697278442/TedXFILES/vomz6nr3kra7kwnbywlh.jpg"
          achievements="FOUNDER OF 1PERCENTCOACH"
          studyInfo=""
          shortIntro="a renowned speaker, known for 27 influential appearances, 5 TEDx talks, and a passion for empowering youth and advocating important causes."
          linkedin="https://www.linkedin.com/in/shubhankarstoryteller/?originalSubdomain=in"
        />

        <Speakercard
          name="Avni Awasthee"
          photo="https://res.cloudinary.com/dpok16gsr/image/upload/v1697107103/TedXFILES/d6m7ljtxsndsmx8e66pa.jpg"
          achievements="Founder of iatthearctic"
          studyInfo=""
          shortIntro="Polar Explorer | Karmaveer Chakra Awardee | Mrs. India Global
                1st Runner-Up ."
          linkedin="https://www.linkedin.com/in/shubhankarstoryteller/?originalSubdomain=in"
        />

        

      </div>
    </div>
  );
};

export default Speakerinfo;
