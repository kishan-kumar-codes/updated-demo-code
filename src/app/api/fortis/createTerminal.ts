import { NextApiRequest, NextApiResponse } from "next";
import { GraphQLClient } from "graphql-request";
import * as jwt from "jsonwebtoken";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false, // Disable Next.js default body parser
  },
};

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    "Content-Type": "application/json",
    "Dg-Auth": process.env.DGRAPH_GRAPHQL_KEY!,
  },
});

const addTerminalTimeoutMutation = `
  mutation addTerminalTimeout(
    $card_entry_timeout: Int!,
    $device_terms_prompt_timeout: Int!,
    $overall_timeout: Int!,
    $pin_entry_timeout: Int!,
    $signature_input_timeout: Int!,
    $signature_submit_timeout: Int!,
    $status_display_time: Int!,
    $tip_cashback_timeout: Int!,
    $transaction_timeout: Int!
  ) {
    addTerminalTimeout(
      input: {
        card_entry_timeout: $card_entry_timeout,
        device_terms_prompt_timeout: $device_terms_prompt_timeout,
        overall_timeout: $overall_timeout,
        pin_entry_timeout: $pin_entry_timeout,
        signature_input_timeout: $signature_input_timeout,
        signature_submit_timeout: $signature_submit_timeout,
        status_display_time: $status_display_time,
        tip_cashback_timeout: $tip_cashback_timeout,
        transaction_timeout: $transaction_timeout
      }
    ) {
      terminalTimeout {
        id
      }
    }
  }
`;

const addTerminalConfigurationMutation = `
  mutation addTerminalConfiguration(
    $terminal_id: String!,
    $terminal_application_id: String!,
    $terminal_manufacturer_code: String!,
    $title: String!,
    $local_ip_address: String!,
    $port: Int!,
    $location_api_id: String!,
    $debit: Boolean!,
    $emv: Boolean!,
    $cashback_enable: Boolean!,
    $print_enable: Boolean!,
    $sig_capture_enable: Boolean!,
    $terminal_cvm_id: String!,
    $terminal_timeouts: ID!,
    $header_line_1: String,
    $header_line_2: String,
    $header_line_3: String,
    $header_line_4: String,
    $header_line_5: String,
    $trailer_line_1: String,
    $trailer_line_2: String,
    $trailer_line_3: String,
    $trailer_line_4: String,
    $trailer_line_5: String,
    $default_checkin: String!,
    $default_checkout: String!,
    $default_room_rate: Float!,
    $default_room_number: String!,
    $is_provisioned: Boolean!,
    $tip_enable: Boolean!,
    $validated_decryption: Boolean!,
    $communication_type: String!,
    $active: Boolean!
    $userId: ID!
  ) {
    addTerminalConfiguration(
      input: {
        terminal_id: $terminal_id
        terminal_application_id: $terminal_application_id,
        terminal_manufacturer_code: $terminal_manufacturer_code,
        title: $title,
        local_ip_address: $local_ip_address,
        port: $port,
        location_api_id: $location_api_id,
        debit: $debit,
        emv: $emv,
        cashback_enable: $cashback_enable,
        print_enable: $print_enable,
        sig_capture_enable: $sig_capture_enable,
        terminal_cvm_id: $terminal_cvm_id,
        terminal_timeouts: { id: $terminal_timeouts },
        header_line_1: $header_line_1,
        header_line_2: $header_line_2,
        header_line_3: $header_line_3,
        header_line_4: $header_line_4,
        header_line_5: $header_line_5,
        trailer_line_1: $trailer_line_1,
        trailer_line_2: $trailer_line_2,
        trailer_line_3: $trailer_line_3,
        trailer_line_4: $trailer_line_4,
        trailer_line_5: $trailer_line_5,
        default_checkin: $default_checkin,
        default_checkout: $default_checkout,
        default_room_rate: $default_room_rate,
        default_room_number: $default_room_number,
        is_provisioned: $is_provisioned,
        tip_enable: $tip_enable,
        validated_decryption: $validated_decryption,
        communication_type: $communication_type,
        active: $active
        user: { id: $userId }
      }
    ) {
      terminalConfiguration {
        id
        terminal_application_id
        title
        local_ip_address
        port
        terminal_timeouts {
          id
          card_entry_timeout
          device_terms_prompt_timeout
          overall_timeout
          pin_entry_timeout
          signature_input_timeout
          signature_submit_timeout
          status_display_time
          tip_cashback_timeout
          transaction_timeout
        }
      }
    }
  }    
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  } else {
    try {
      // Extract data from the request body
      const rawBody = await getRawBody(req);
      const data = JSON.parse(rawBody.toString());
      delete data.token;
      delete data.userId;
    // Verify JWT token
    

    // Send the request to the Fortis API
    const fortisResponse = await fetch("https://api.sandbox.fortis.tech/v1/terminals", {
      method: "POST",
      headers: {
        "user-id": process.env.USER_ID!,
        "user-api-key": process.env.USER_API_KEY!,
        "developer-id": process.env.DEVELOPER_ID!,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Use terminalData excluding the token
    });

      if (!fortisResponse.ok) {
        let errorDetails;
        try {
          const errorData = await fortisResponse.json();
          errorDetails = JSON.stringify(errorData);
        } catch (jsonError) {
          errorDetails = "Unable to parse error details from Fortis API";
        }
        console.error(
          `Error from Fortis API: Status ${fortisResponse.status}, Details: ${errorDetails}`
        );
        res
          .status(fortisResponse.status)
          .json({
            error: "Failed to create merchant onboarding",
            details: errorDetails,
          });
      } else {
        const responseData = await fortisResponse.json();

        console.log("responseData",responseData);

        const body = JSON.parse(rawBody.toString());
        const terminalTimeoutsVariables = {
            card_entry_timeout: body.terminal_timeouts.card_entry_timeout,
            device_terms_prompt_timeout: body.terminal_timeouts.device_terms_prompt_timeout,
            overall_timeout: body.terminal_timeouts.overall_timeout,
            pin_entry_timeout: body.terminal_timeouts.pin_entry_timeout,
            signature_input_timeout: body.terminal_timeouts.signature_input_timeout,
            signature_submit_timeout: body.terminal_timeouts.signature_submit_timeout,
            status_display_time: body.terminal_timeouts.status_display_time,
            tip_cashback_timeout: body.terminal_timeouts.tip_cashback_timeout,
            transaction_timeout: body.terminal_timeouts.transaction_timeout,
          };
      
          const terminalTimeoutsResponse = await client.request(
            addTerminalTimeoutMutation,
            terminalTimeoutsVariables
          );

          console.log("terminalTimeoutsResponse",terminalTimeoutsResponse);
          console.log("terminalTimeoutsResponse.addTerminalTimeout.terminalTimeout",terminalTimeoutsResponse.addTerminalTimeout.terminalTimeout[0].id);
          
          const terminalTimeoutsId = terminalTimeoutsResponse.addTerminalTimeout.terminalTimeout[0].id; // Extract the ID
          
      
          // Now mutate TerminalConfiguration using the terminalTimeoutsId
          const terminalConfigurationVariables = {
            terminal_id:responseData.data.id,
            terminal_application_id: body.terminal_application_id,
            terminal_manufacturer_code: body.terminal_manufacturer_code,
            title: body.title,
            local_ip_address: body.local_ip_address,
            port: body.port,
            location_api_id: body.location_api_id,
            debit: body.debit,
            emv: body.emv,
            cashback_enable: body.cashback_enable,
            print_enable: body.print_enable,
            sig_capture_enable: body.sig_capture_enable,
            terminal_cvm_id: body.terminal_cvm_id,
            terminal_timeouts: terminalTimeoutsId,
            header_line_1: body.header_line_1,
            header_line_2: body.header_line_2,
            header_line_3: body.header_line_3,
            header_line_4: body.header_line_4,
            header_line_5: body.header_line_5,
            trailer_line_1: body.trailer_line_1,
            trailer_line_2: body.trailer_line_2,
            trailer_line_3: body.trailer_line_3,
            trailer_line_4: body.trailer_line_4,
            trailer_line_5: body.trailer_line_5,
            default_checkin: body.default_checkin,
            default_checkout: body.default_checkout,
            default_room_rate: body.default_room_rate,
            default_room_number: body.default_room_number,
            is_provisioned: body.is_provisioned,
            tip_enable: body.tip_enable,
            validated_decryption: body.validated_decryption,
            communication_type: body.communication_type,
            active: body.active,
            userId:body.userId
          };
      
          const terminalConfigResponse = await client.request(
            addTerminalConfigurationMutation,
            terminalConfigurationVariables
          );

        res.status(200).json(terminalConfigResponse);
      }
    } catch (error) {
      // Assert that error is of type Error to access its properties like message
      if (error instanceof Error) {
        console.error("Unexpected error:", error.message);
        res.status(500).json({
          error: "Internal Server Error",
          message: error.message,
        });
      } else {
        // Handle cases where the error is not an instance of Error
        console.error("Unexpected error:", error);
        res.status(500).json({
          error: "Internal Server Error",
          message: "An unknown error occurred",
        });
      }
    }
  }
}
