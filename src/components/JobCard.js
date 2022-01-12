import React from 'react'
import styled from 'styled-components'


function JobCard({bg,logo,name,loc,tit,type,stack,salary}) {
    return (
        <JobCardStyled>
            <div className="card-con">
                <div className="card-top">
                    <img src={logo} alt="" />
                    <div className="c-top-text">
                        <h5>{name}</h5>
                        <p>{loc}</p>
                    </div>
                </div>
                <h4 className='c-title'>{tit}</h4>
                <p className='type' style={{color:bg}}>{type}</p>
                <p className='stack'>{stack}</p>
                <div className="job-info">
                    <p>{salary}<span>/Yearly</span> </p>
                    <div className="btn">Apply Now </div>
                </div>
            </div>
        </JobCardStyled>
    )
}
const JobCardStyled = styled.div`
h5{
    color:black;
}
.c-title{
    color:green;
}

background-color:var(--color-white);
    border-radius:7px;
    transition:all 0.4s ease-in-out;
    box-shadow:0px 1px 20px rgba(0,0,0,0.01);
    &:hover{
        box-shadow:0px 1px 20px rgba(0,0,0,0.1);
        transform:translateY(-5px );

    }
    .btn{
        background-color:var(--color-primary);
        font-weight:400;
        cursor:pointer;
        text-align:center; 
    }
`;
export default JobCard
