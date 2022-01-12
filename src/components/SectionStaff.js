import React from 'react'
import styled from 'styled-components';
import { InnerLayout } from '../Layouts';
import StaffCard from './StaffCard';
import Title from './Title';
import avatar1 from '../img/avatar1.png'
import avatar2 from '../img/avatar2.png'
import avatar3 from '../img/avatar3.png'
import avatar4 from '../img/avatar4.png'
import star from '../img/star.svg'
import star_half from '../img/star_half.svg'
import bookmark from '../img/bookmark.svg'




function SectionStaff() {
    return (
        <SectionStaffStyled>
            <InnerLayout>
                <div className="title-con">
                    <Title name={"our staff"} para={"our team developer and otherone"}/>
                </div>
                <div className="staff-card">
                    <StaffCard img={avatar1}
                     bookmark={bookmark}
                     name={"Deepak suthar"}
                     tit={"developer"}
                     rating={star}
                     rating_half={star_half}
                     stack={"c,c++,python,Node,express,react"}

                     />
                    <StaffCard img={avatar2}
                     bookmark={bookmark}
                     name={"Deepak suthar"}
                     tit={"developer"}
                     rating={star}
                     rating_half={star_half}
                     stack={"c,c++,python,Node,express,react"}

                     />
                    <StaffCard img={avatar3}
                     bookmark={bookmark}
                     name={"abhishek suthar"}
                     tit={"graphic designer"}
                     rating={star}
                     rating_half={star_half}
                     stack={"python,Node,express,react"}

                     />
                    <StaffCard img={avatar4}
                     bookmark={bookmark}
                     name={"Deepak suthar"}
                     tit={"developer"}
                     rating={star}
                     rating_half={star_half}
                     stack={"c,c++,python,Node,express,react"}

                     />
                </div>
            </InnerLayout>
        </SectionStaffStyled>
    )
}
const SectionStaffStyled = styled.section``;
export default SectionStaff
