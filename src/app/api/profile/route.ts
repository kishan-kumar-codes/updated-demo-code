import { NextRequest, NextResponse } from 'next/server'
import { GraphQLClient } from 'graphql-request'
import * as jwt from 'jsonwebtoken'

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
})

const updateUserMutation = `
  mutation UpdateUser(
    $email: String!,
    $firstName: String!,
    $lastName: String!,
    $businessInfo: String,
    $phoneNumber: String,
    $goals: [String],
    $image: String,
    $jobTitle: String,
    $selectedIndustry: String,
    $selectedEmployees: String,
    $selectedRevenue: String,
    $emailList: [String],
    $businessWebsite: String,
    $inviteEmailList: [String]
  ) {
    updateUser(
      input: {
        filter: { email: { eq: $email } },
        set: {
          firstName: $firstName,
          lastName: $lastName,
          businessInfo: $businessInfo,
          phoneNumber: $phoneNumber,
          goals: $goals,
          image: $image,
          jobTitle: $jobTitle,
          selectedIndustry: $selectedIndustry,
          selectedEmployees: $selectedEmployees,
          selectedRevenue: $selectedRevenue,
          emailList: $emailList,
          businessWebsite: $businessWebsite,
          inviteEmailList: $inviteEmailList
        }
      }
    ) {
      user {
        firstName,
        lastName,
        businessInfo,
        phoneNumber,
        goals,
        image,
        jobTitle,
        selectedIndustry,
        selectedEmployees,
        selectedRevenue,
        emailList,
        businessWebsite,
        inviteEmailList
      }
    }
  }
`

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      email,
      firstName,
      lastName,
      businessInfo,
      phoneNumber,
      goals,
      image,
      jobTitle,
      selectedIndustry,
      selectedEmployees,
      selectedRevenue,
      emailList,
      businessWebsite,
      inviteEmailList,
    } = body

    // Update user in Dgraph
    const variables = {
      email,
      firstName,
      lastName,
      businessInfo,
      phoneNumber,
      goals,
      image,
      jobTitle,
      selectedIndustry,
      selectedEmployees,
      selectedRevenue,
      emailList,
      businessWebsite,
      inviteEmailList,
    }

    const data = await client.request(updateUserMutation, variables)
    console.log("Data mutate", data)
    const updatedUser = (data as any).updateUser.user

    if (!updatedUser || updatedUser.length === 0) {
      return NextResponse.json({ error: 'User not found or update failed' }, { status: 404 })
    }

    return NextResponse.json(updatedUser[0], { status: 200 })
  } catch (error: any) {
    console.error('Error updating user profile:', error)
    return NextResponse.json({ error: 'Failed to update user profile' }, { status: 500 })
  }
}

export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}