# Profile Visibility Manager

This project is a simple TypeScript practice exercise focused on deepening the understanding of:

- `typeof`
- `keyof`
- indexed access types
- mapped types
- partial types
- generic functions
- updating objects dynamically

It allows managing which fields of a user profile should be visible or hidden, and updating the profile data.

---

## Features

- Set visibility for each field of the profile
- Toggle visibility for individual fields
- Reset visibility settings for all fields
- Display only visible profile fields nicely
- Update the values of profile fields dynamically

---

## Technologies

- TypeScript

---

## Concepts Practiced

- `typeof`, `keyof`, indexed access types
- mapped types and optional properties
- `Partial` utility type
- generic functions
- object and array handling
- conditional visibility logic

## How It Works

The app uses a `profile` object and a `visibilitySettings` object.  
Functions like `setVisibility`, `resetVisibility`, and `toggleVisibility` control what parts of the profile are shown.  
The `showProfile` function displays only the fields that are currently visible.  
The `updateProfile` function allows updating profile values safely using TypeScript types.

---

✅ This project is focused on practicing **TypeScript types** and **dynamic object handling**.
