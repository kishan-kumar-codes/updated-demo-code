
import { NextRequest, NextResponse } from "next/server";
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
    $location_id: String!,
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
        location_id: $location_id
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
        location_id
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

export async function POST(request: NextRequest) {
  try {
    // Extract data from the request body
    const data = await request.json();

    const { token, userId, ...fortisData } = data;

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
      body: JSON.stringify(fortisData),
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
      return NextResponse.json(
        { error: "Failed to create merchant onboarding", details: errorDetails },
        { status: fortisResponse.status }
      );
    }

    const responseData = await fortisResponse.json();

    console.log("responseData", responseData);

    const terminalTimeoutsVariables = {
      card_entry_timeout: data.terminal_timeouts.card_entry_timeout,
      device_terms_prompt_timeout: data.terminal_timeouts.device_terms_prompt_timeout,
      overall_timeout: data.terminal_timeouts.overall_timeout,
      pin_entry_timeout: data.terminal_timeouts.pin_entry_timeout,
      signature_input_timeout: data.terminal_timeouts.signature_input_timeout,
      signature_submit_timeout: data.terminal_timeouts.signature_submit_timeout,
      status_display_time: data.terminal_timeouts.status_display_time,
      tip_cashback_timeout: data.terminal_timeouts.tip_cashback_timeout,
      transaction_timeout: data.terminal_timeouts.transaction_timeout,
    };

    const terminalTimeoutsResponse = await client.request(
      addTerminalTimeoutMutation,
      terminalTimeoutsVariables
    );

    console.log("terminalTimeoutsResponse", terminalTimeoutsResponse);
    console.log("terminalTimeoutsResponse.addTerminalTimeout.terminalTimeout", terminalTimeoutsResponse.addTerminalTimeout.terminalTimeout[0].id);

    const terminalTimeoutsId = terminalTimeoutsResponse.addTerminalTimeout.terminalTimeout[0].id;

    // Now mutate TerminalConfiguration using the terminalTimeoutsId
    const terminalConfigurationVariables = {
      terminal_id: responseData.data.id,
      location_id: data.location_id,
      terminal_application_id: data.terminal_application_id,
      terminal_manufacturer_code: data.terminal_manufacturer_code,
      title: data.title,
      local_ip_address: data.local_ip_address,
      port: data.port,
      location_api_id: data.location_api_id,
      debit: data.debit,
      emv: data.emv,
      cashback_enable: data.cashback_enable,
      print_enable: data.print_enable,
      sig_capture_enable: data.sig_capture_enable,
      terminal_cvm_id: data.terminal_cvm_id,
      terminal_timeouts: terminalTimeoutsId,
      header_line_1: data.header_line_1,
      header_line_2: data.header_line_2,
      header_line_3: data.header_line_3,
      header_line_4: data.header_line_4,
      header_line_5: data.header_line_5,
      trailer_line_1: data.trailer_line_1,
      trailer_line_2: data.trailer_line_2,
      trailer_line_3: data.trailer_line_3,
      trailer_line_4: data.trailer_line_4,
      trailer_line_5: data.trailer_line_5,
      default_checkin: data.default_checkin,
      default_checkout: data.default_checkout,
      default_room_rate: data.default_room_rate,
      default_room_number: data.default_room_number,
      is_provisioned: data.is_provisioned,
      tip_enable: data.tip_enable,
      validated_decryption: data.validated_decryption,
      communication_type: data.communication_type,
      active: data.active,
      userId: data.userId
    };

    const terminalConfigResponse = await client.request(
      addTerminalConfigurationMutation,
      terminalConfigurationVariables
    );

    return NextResponse.json(terminalConfigResponse);
  } catch (error) {
    console.error("Unexpected error:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error instanceof Error ? error.message : "An unknown error occurred",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
