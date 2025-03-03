---
title: Manage your toddle project – settings, branches & version control
description: Learn how to manage your toddle project. Configure settings, collaborate on branches with team members and track changes in version history.
date: 2025-03-02
updated: 2025-03-02
author: Franz Baur
tags: 
  - project details
  - project settings
---

# Project Details
The Project Details page provides all the essential information about your app or package. Here, you can manage your project’s settings, versioning, track changes and collaborate efficiently.

![Test image](test.webp)

## Settings
The settings section allows you to manage all configurations for your project.

Available Settings
- **Edit Your Domain**: customize the domain for your project.
- **Live preview**: Access the live preview of your project.
- **Invite Members**: Add members from your organization to collaborate on the project.
- **Clone Project**: Create a duplicate of the project in any of your organizations.
- **Additional Actions**:
    - for **apps**: 
        - Change your app to **public**, where anyone can view it, or **private** with restricted access.
        - Delete your app.
    - for **packages**:
        - Delete your package. This action is only possible before your package is launched.
- **Edit Details**:
    - Set a logo: Upload a custom logo for your project.
    - Modify Project Information: Edit details such as project ID, name and description.

## Branches
Using branches ensures a smooth and organized development process while keeping the main project stable. They allow you to control versioning in your project.

Every project has a **main** branch, which is `read-only`. This branch reflects the current state in the editor but cannot be modified directly.

To make changes, you need to create a new branch. This ensures that development remains structured and allows for easy version control.

You can see all branches of your project, including information about who created each one.

For each branch you have following actions:
- **Edit**: Opens the branch in the editor, where you can work on your project.
- **View changes**: Provides an overview of all modifications in the branch. If the branch is not based on the latest main branch, you will also see any conflicts caused by outdated components or actions. This helps you resolve conflicts before syncing with the current main branch.

### Create a New Branch
To create a new branch:
1. Click the `Create branch` button
2. Enter a name for the branch

The branch is created and you are automatically redirected to the editor to start working.

## Version History
The Version History section provides an overview of all commits made to the project. This helps maintain control over project iterations and ensures that previous states can be rolled back when necessary.

The commit labeled `Live version` represents the current deployed version of your project. It corresponds to the main branch.

## Members
The members section lists all project members. If needed, you can remove a member from the project, except for the project owner.