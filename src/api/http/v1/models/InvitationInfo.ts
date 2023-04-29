/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type InvitationInfo = {
    /**
     * Required: Email address to invite
     */
    email?: string;
    /**
     * Required: Role to associate this user to
     */
    role?: string;
    /**
     * Invitation sender name
     */
    invitation_sent_by_name?: string;
};

