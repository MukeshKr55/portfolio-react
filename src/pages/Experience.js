import { School } from "@mui/icons-material";
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const Experience = () => {
    return <div className="experience">
        <VerticalTimeline lineColor="#3e497a">
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2014-2016" iconStyle={{background:"#3e497a", color:"#fff"}}
            icon={<School />} >
                <h3 className="vertical-timeline-element-title">Kendriya Vidyalaya Dipatoli(CBSE), JHARKHAND</h3>
                <p> Xth</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2016-2018" iconStyle={{background:"#3e497a", color:"#fff"}}
            icon={<School />} >
                <h3 className="vertical-timeline-element-title"> Surendranath Centenary School(CBSE), JHARKHAND</h3>
                <p>XIIth</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--education"
            date="2019-2023" iconStyle={{background:"#3e497a", color:"#fff"}}
            icon={<School />} >
                <h3 className="vertical-timeline-element-title">Vel Tech Rangarajan Dr. Sagunthala R and D Institute of Science and Technology, TAMIL NADU</h3>
                <p> B-Tech(Computer Science and Engineering)</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        </div>
}