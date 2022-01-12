import React from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../Layouts';
import CatBtn from './CatBtn';
import Title from './Title';


function SectionCategory() {
    return (
        <SectionCategoryStyled>
            <InnerLayout>
                <div className="title-con">
                    <Title name={"all category"} para={"find right jobs "}/>
                </div>
                <div className="category-con">
                    <CatBtn name={"Game Development (600) "}/>
                    <CatBtn name={"Game design (50+) "}/>
                    <CatBtn name={"Web Development (3000+) "}/>
                    <CatBtn name={"Web3 Developer (100+) "}/>
                    <CatBtn name={"Cypto Development (250+) "}/>
                    <CatBtn name={"Graphice Design (200+) "}/>
                    <CatBtn name={"Animation Development (25+) "}/>
                    <CatBtn name={"Logo Development (10+) "}/>
                    <CatBtn name={"Website Development (1000+) "}/>
                    <CatBtn name={"APP Development (1000+) "}/>
                    <CatBtn name={"automation engineer (10+) "}/>
                    <CatBtn name={"research and development (100+) "}/>
                </div>
            </InnerLayout>
        </SectionCategoryStyled>
    )
}
const SectionCategoryStyled  = styled.section`
    .category-con{
        display:grid;
        grid-template-columns:repeat(4, 1fr);
        grid-gap:1.2rem;
        padding-top:3rem;
    }
`;


export default SectionCategory
