import React from 'react';

const RequestReviews: React.FC = () => {
    const handleSubmit = async () => {
        try {
            const response = await fetch('/api/lde/requestReviews', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    foreign_key: '12345', // A unique identifier for the request
                    lazy: true, // Set to true to allow for longer timeouts, if necessary
                    // The Business data is placed in data->business. This data will be used to search for a business profile if no profile_key is provided
                    business: {
                        id: '1234567890', // Business ID
                        //id: '', // Business ID
                        name: 'Digital Horsepower, Inc.', // Business Name
                        address: {
                            street: '1473 NW 10th Street', // Street Address
                            city: 'Dania Beach', // City
                            state: 'FL', // State
                            zip: '33004', // ZIP Code
                        },
                        phone: '', // Phone Number
                        description: '', // Business Description
                        tags: [] // Tags associated with the business
                    },
                    publishers: {
                        'maps.google.com': {
                            profile_key: 'https://www.google.com/maps/place/Digital+Horsepower,+Inc./@26.1410891,-80.2279668,12z/data=!3m1!4b1!4m6!3m5!1s0x88d8fd98e9dbcbcb:0x8ebcc4228287537c!8m2!3d26.1411125!4d-80.145567!16s%2Fg%2F11nngsmfrg?entry=ttu', // Profile Key for the business on the publisher's site
                            /*last_review_hashes: [ // List of the last review hashes received to prevent duplicates
                                '9487e4202954d101e15e95cc06a8c4e8',
                                '6bb1a0e4195079f58506c60633cb20cc',
                                'ceb5771ddd6ad12a036278263429de29',
                                'a034bbbbf6ea8e6995c3c409f996642d'
                            ],*/
                            first_page_only: false, // Whether to only scrape the first page of reviews
                            //social_profile: true, // Enables fetching of publisher's profile URL and potential matches with zero false positives
                            /*persona: { // Persona information for scraping
                                additional_cookies: { // Cookies required for sites like Facebook or Yelp
                                    login: [
                                        {
                                            name: 'Cookie_Name',
                                            value: 'Cookie_Value',
                                            domain: 'Cookie_domain',
                                        },
                                        {
                                            name: 'Cookie_Name',
                                            value: 'Cookie_Value',
                                            domain: 'Cookie_domain',
                                        },
                                    ]
                                }
                            },*/
                        }
                    }
                }),
            });

            if (!response.ok) {
                // Handle HTTP errors here
                console.error(`HTTP error! status: ${response.status}`);
                return;
            }

            const data = await response.json();
            console.log('Request submitted successfully', data);
        } catch (error) {
            console.error('Error submitting request:', error);
            // Handle other types of errors (e.g., network errors)
        }
    };

    return (
        <div>
            <h1>Request Reviews</h1>
            <button onClick={handleSubmit} style={{cursor: 'pointer'}}>Submit</button>
        </div>
    );
};

export default RequestReviews;
