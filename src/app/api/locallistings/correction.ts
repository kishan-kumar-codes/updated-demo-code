
// import axios from 'axios';

// export default async function handler(req, res) {
//     try {
//         const response = await axios.post('https://api.data-axle.com/v1/places/submissions',
//             {
//                 "infogroup_id": "000058840",
//                 "attributes": {
//                 "Location Phone": "206-405-9183"
//                 }
//             },
//             {
//                 headers: {
//                     'X-AUTH-TOKEN': '9b6b86fd53dcce77b7fa5c6e',
//                     'Content-type': 'application/json'
//                 }
//             }
//             );
//             res.status(200).json(response.data);
//             } catch (error) {
//             res.status(500).json({ error: error });
//             }
//         }



import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: NextRequest) {
    try {
        const response = await axios.post('https://api.data-axle.com/v1/places/submissions',
            {
                "infogroup_id": "000058840",
                "attributes": {
                    "Location Phone": "206-405-9183"
                }
            },
            {
                headers: {
                    'X-AUTH-TOKEN': '9b6b86fd53dcce77b7fa5c6e',
                    'Content-type': 'application/json'
                }
            }
        );

        return NextResponse.json(response.data);
    } catch (error) {
        console.error('Error submitting to Data Axle:', error);
        return NextResponse.json({ error: 'Failed to submit to Data Axle' }, { status: 500 });
    }
}
