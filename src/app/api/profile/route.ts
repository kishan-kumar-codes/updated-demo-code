import { NextRequest, NextResponse } from 'next/server'
import { GraphQLClient } from 'graphql-request'
import * as jwt from 'jsonwebtoken'

const client = new GraphQLClient(process.env.DGRAPH_GRAPHQL_ENDPOINT!, {
  headers: {
    'Content-Type': 'application/json',
    'Dg-Auth': process.env.DGRAPH_GRAPHQL_KEY!,
  },
})

const refreshTokenMutation = `
  mutation RefreshToken($refreshToken: String!) {
    updateSession(input: { filter: { refreshToken: { eq: $refreshToken } }, set: { refreshToken: $refreshToken } }) {
      session {
        refreshToken
      }
    }
  }
`

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
      token,
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


    // console.log("Body", token,
    //   email,
    //   firstName,
    //   lastName,)

    // Decode and verify the session token
    // const decodedToken = jwt.verify(
    //   token.sessionToken,
    //   process.env.SECRET!
    // ) as { email: string }

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
    if (error.name === 'TokenExpiredError') {
      // Token expired, try to refresh it
      try {
        const body = await request.json()
        const { token } = body
        const decodedRefreshToken = jwt.decode(token.refreshToken) as string

        // Refresh token mutation
        await client.request(refreshTokenMutation, {
          refreshToken: token.refreshToken,
        })

        // Retry the update user request with the original session token
        const newVariables = {
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          businessInfo: body.businessInfo,
          phoneNumber: body.phoneNumber,
          goals: body.goals,
          image: body.image,
          jobTitle: body.jobTitle,
          selectedIndustry: body.selectedIndustry,
          selectedEmployees: body.selectedEmployees,
          selectedRevenue: body.selectedRevenue,
          emailList: body.emailList,
          businessWebsite: body.businessWebsite,
          inviteEmailList: body.inviteEmailList,
        }

        const newData = await client.request(updateUserMutation, newVariables)
        const newUpdatedUser = (newData as any).updateUser.user

        if (!newUpdatedUser || newUpdatedUser.length === 0) {
          return NextResponse.json({ error: 'User not found or update failed' }, { status: 404 })
        }

        return NextResponse.json(newUpdatedUser[0], { status: 200 })
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError)
        return NextResponse.json({ error: 'Failed to refresh token' }, { status: 500 })
      }
    } else {
      console.error('Error updating user profile:', error)
      return NextResponse.json({ error: 'Failed to update user profile' }, { status: 500 })
    }
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