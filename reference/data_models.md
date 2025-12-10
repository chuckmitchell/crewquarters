# Data Models

Here is the proposed list of Data Models and their attributes for CrewQuarters.

# Global / Admin Models
These entities exist outside of any specific project and are managed in an Admin section.

## Accommodation Property (Global Inventory)
*   **Name**: String (e.g., "Lunenburg Arms Hotel")
*   **Address**: String
*   **Type**: Enum (Hotel, Motel, BnB, House)
*   **Contact Info**: Text (Phone/Email)
*   **Default Capacity**: Integer (Total rooms usually available)

## Role / Title (Global Library)
*   **Title**: String (e.g., "Director of Photography", "Key Grip", "Boom Operator")
*   **Department**: String (e.g., "Camera", "Sound")
*   **Priority Ranking**: Integer (1-10, where 1 is highest priority for "best" rooms)

---

# Project-Specific Models

## Project
*   **Name**: String (e.g., "The Lighthouse")
*   **Shooting Dates**: Date Range
*   **Accommodation Dates**: Date Range (Calculated)

## Room Block (Project-Property Link)
*   **Project ID**: Reference
*   **Property ID**: Reference (Global Accommodation)
*   **Rooms Reserved**: Integer (Number of rooms blocked for this project)
*   **Status**: Enum (Draft, Requested, Confirmed)
*   **Date Range**: Date Range (Specific dates for this block)

## Crew Member (Project Roster)
*   **Name**: String
*   **Role ID**: Reference (Global Role) -> *Inherits Priority*
*   **Contact Info**: Email/Phone
*   **Requires Housing**: Boolean
*   **Housing Assignment**: Reference (Assignment ID)

## Housing Assignment
*   **Crew Member ID**: Reference
*   **Room Block ID**: Reference
*   **Room Number**: String (Specific assignment, e.g. "204")
*   **Dates**: Date Range
