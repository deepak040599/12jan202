import React from 'react'
import styled from 'styled-components'
import {InnerLayout} from '../Layouts'
import JobCard from './JobCard';
import Title from './Title';
import logo1 from '../img/logo1.svg';
import logo2 from '../img/logo2.svg';
import logo3 from '../img/logo3.svg';
import logo4 from '../img/logo4.svg';
import logo5 from '../img/logo5.svg';
import logo6 from '../img/logo6.svg';



function SectionJobs() {
    return (
        <SectionJobStyled>
            <InnerLayout>
                 <div className="title-con">
                      <Title name={"Recent Jobs"} para={"find the right job for you which can suitable according to you"}/>
                 </div>
                 <div className="cards-con">
                     <JobCard
                     logo={logo1}
                     bg={'#27AE60'}
                      name={"Deepak suthar"}
                       loc={"indore M.P."}
                       tit={"softwere Engineer"}
                       type={"full time "}
                       stack={"Reactjs expert"}
                       salary={"5 lakh /annum"}
                       />
                     <JobCard
                     logo={logo2}
                     bg={'#27AE60'}
                      name={"abhishek suthar"}
                       loc={"neemuch M.P."}
                       tit={"softwere Engineer"}
                       type={"part time "}
                       stack={"angularjs expert"}
                       salary={"3 lakh /annum"}
                       />
                     <JobCard
                     logo={logo3}
                     bg={'#27AE60'}
                      name={"shubham mishra"}
                       loc={"jabalpur M.P."}
                       tit={"softwere Engineer"}
                       type={"remote "}
                       stack={"vuejs expert"}
                       salary={"1 lakh /annum"}
                       />
                     <JobCard
                     logo={logo4}
                     bg={'#27AE60'}
                      name={"aditya "}
                       loc={"Rewa M.P."}
                       tit={"softwere Engineer"}
                       type={"student "}
                       stack={"design expert"}
                       salary={"0.5 lakh /annum"}
                       />
                     <JobCard
                     logo={logo5}
                     bg={'#27AE60'}
                      name={"Reema"}
                       loc={"dhar M.P."}
                       tit={"softwere Engineer"}
                       type={"full time "}
                       stack={"MERN expert"}
                       salary={"10 lakh /annum"}
                       />
                     <JobCard
                     logo={logo6}
                     bg={'#27AE60'}
                      name={"shilpi"}
                       loc={"panna M.P."}
                       tit={"softwere Engineer"}
                       type={"part time "}
                       stack={"python expert"}
                       salary={"1 lakh /annum"}
                       />
                  
                   
                 </div>
            </InnerLayout>
        </SectionJobStyled>
    )
}
const SectionJobStyled = styled.section`
.cards-con{
    margin:5px;
    padding:1px;
    display:grid;
    grid-template-columns:400px 400px 400px;
    grid-gap:20px;
    text-align:center;
    display:flex;
}
img{
    height:80px;
    width:80px;
}
    `;
export default SectionJobs

