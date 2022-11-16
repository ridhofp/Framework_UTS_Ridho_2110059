import React from 'react';
import Card from './card';
import ServiceData from './servicedata';

const Services = () => {
    return (
        <>
            <div className="my-8">
                <h1 className="text-center">VPS yang tersedia</h1>
            </div>
            <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                        {
                        ServiceData.map((val, index) => {
                                return <Card 
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    price={val.price}
                                    tags={val.tags}
                                    key={index}
                                />
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Services;
