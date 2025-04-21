import { useState, useEffect } from 'react';

import Markdown from 'react-markdown';
import IntersectingHeader from './IntersectingHeader';
import Parameters from './parameters';

import OauthToken from '@site/src/pages/apis/embeds/tag/Authentication/post/oauth/token.md';
import OauthAuthorize from '@site/src/pages/apis/embeds/tag/Authentication/get/oauth/authorize.md';

import ListOrganizations from '@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations.md';
import CreateOrganization from '@site/src/pages/apis/embeds/tag/Organization/post/api/v1/organizations.md';
import GetOrganization from '@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations/{id}.md';
import UpdateOrganization from '@site/src/pages/apis/embeds/tag/Organization/patch/api/v1/organizations/{id}.md';
import UpdateOrganizationSettings from '@site/src/pages/apis/embeds/tag/Organization/patch/api/v1/organizations/{id}/settings.md';
import DeleteOrganization from '@site/src/pages/apis/embeds/tag/Organization/delete/api/v1/organizations/{id}.md';

import GetPortalLinks from '@site/src/pages/apis/embeds/tag/Admin Portal/get/api/v1/organizations/{id}/portal_links.md';
import GeneratePortalLink from '@site/src/pages/apis/embeds/tag/Admin Portal/put/api/v1/organizations/{id}/portal_links.md';
import DeletePortalLink from '@site/src/pages/apis/embeds/tag/Admin Portal/delete/api/v1/organizations/{id}/portal_links.md';

import ListConnections from '@site/src/pages/apis/embeds/tag/Connection/get/api/v1/connections.md';
import GetConnection from '@site/src/pages/apis/embeds/tag/Connection/get/api/v1/organizations/{organization_id}/connections/{id}.md';
import DisableConnection from '@site/src/pages/apis/embeds/tag/Connection/patch/api/v1/organizations/{organization_id}/connections/{id}:disable.md';
import EnableConnection from '@site/src/pages/apis/embeds/tag/Connection/patch/api/v1/organizations/{organization_id}/connections/{id}:enable.md';

import ListDirectories from '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories.md';
import ListGroups from '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories/{directory_id}/groups.md';
import ListUsers from '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories/{directory_id}/users.md';
import GetDirectory from '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories/{id}.md';
import DisableDirectory from '@site/src/pages/apis/embeds/tag/Directory/patch/api/v1/organizations/{organization_id}/directories/{id}:disable.md';
import EnableDirectory from '@site/src/pages/apis/embeds/tag/Directory/patch/api/v1/organizations/{organization_id}/directories/{id}:enable.md';

import CreateM2MClients from '@site/src/pages/apis/embeds/tag/M2M/post/api/v1/organizations/{organization_id}/clients.md';
import GetM2MClients from '@site/src/pages/apis/embeds/tag/M2M/get/api/v1/organizations/{organization_id}/clients/{client_id}.md';
import UpdateM2MClients from '@site/src/pages/apis/embeds/tag/M2M/patch/api/v1/organizations/{organization_id}/clients/{client_id}.md';
import DeleteM2MClients from '@site/src/pages/apis/embeds/tag/M2M/delete/api/v1/organizations/{organization_id}/clients/{client_id}.md';
import CreateM2MClientSecret from '@site/src/pages/apis/embeds/tag/M2M/post/api/v1/organizations/{organization_id}/clients/{client_id}/secrets.md';
import DeleteM2MClientSecret from '@site/src/pages/apis/embeds/tag/M2M/delete/api/v1/organizations/{organization_id}/clients/{client_id}/secrets/{secret_id}.md';

const data = require('../../openapi/scalekit.swagger.json');

const endpointData = {
  summary: (endpoint, method) => {
    if (data['paths'][endpoint]) {
      if (data['paths'][endpoint][method]) {
        return data['paths'][endpoint][method].summary;
      }
    }

    return 'Summary not available';
  },
  description: (endpoint, method) => {
    if (data['paths'][endpoint]) {
      if (data['paths'][endpoint][method]) {
        return data['paths'][endpoint][method].description;
      }
    }
    return 'Description not available';
  },
  filename: (endpoint, method, tag) => {
    return (
      '@site/src/pages/apis/embeds/tag/' + tag + '/' + method + endpoint + '.md'
    );
  },
};

export function APIEndpoint({ endpoint, method, tag }) {
  return (
    <>
      <IntersectingHeader
        title={endpointData.summary(endpoint, method)}
        id={'tag/' + tag + '/' + method + endpoint}
        subheading="true"
        classList={'ApiCategoryList ' + method + ' method'}
        addSidebar="true"
      />
      <div className="row section">
        <div className="col col--6">
          <Markdown>{endpointData.description(endpoint, method)}</Markdown>
          <Parameters endpoint={endpoint} method={method} />
        </div>
        <div className="col col--6">
          <div className="scalar-card-sticky">
            <APIEndpointCodeSamples
              filename={endpointData.filename(endpoint, method, tag)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

const APIEndpointCodeSamples = ({ filename }) => {
  switch (filename) {
    case '@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations.md':
      return <ListOrganizations />;
    case '@site/src/pages/apis/embeds/tag/Organization/post/api/v1/organizations.md':
      return <CreateOrganization />;
    case '@site/src/pages/apis/embeds/tag/Organization/get/api/v1/organizations/{id}.md':
      return <GetOrganization />;
    case '@site/src/pages/apis/embeds/tag/Organization/delete/api/v1/organizations/{id}.md':
      return <DeleteOrganization />;
    case '@site/src/pages/apis/embeds/tag/Organization/patch/api/v1/organizations/{id}.md':
      return <UpdateOrganization />;
    case '@site/src/pages/apis/embeds/tag/Organization/patch/api/v1/organizations/{id}/settings.md':
      return <UpdateOrganizationSettings />;
    case '@site/src/pages/apis/embeds/tag/Authentication/post/oauth/token.md':
      return <OauthToken />;
    case '@site/src/pages/apis/embeds/tag/Authentication/get/oauth/authorize.md':
      return <OauthAuthorize />;
    case '@site/src/pages/apis/embeds/tag/Admin Portal/get/api/v1/organizations/{id}/portal_links.md':
      return <GetPortalLinks />;
    case '@site/src/pages/apis/embeds/tag/Admin Portal/put/api/v1/organizations/{id}/portal_links.md':
      return <GeneratePortalLink />;
    case '@site/src/pages/apis/embeds/tag/Admin Portal/delete/api/v1/organizations/{id}/portal_links.md':
      return <DeletePortalLink />;
    case '@site/src/pages/apis/embeds/tag/Connection/patch/api/v1/organizations/{organization_id}/connections/{id}:disable.md':
      return <DisableConnection />;
    case '@site/src/pages/apis/embeds/tag/Connection/patch/api/v1/organizations/{organization_id}/connections/{id}:enable.md':
      return <EnableConnection />;
    case '@site/src/pages/apis/embeds/tag/Connection/get/api/v1/connections.md':
      return <ListConnections />;
    case '@site/src/pages/apis/embeds/tag/Connection/get/api/v1/organizations/{organization_id}/connections/{id}.md':
      return <GetConnection />;
    case '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories.md':
      return <ListDirectories />;
    case '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories/{directory_id}/groups.md':
      return <ListGroups />;
    case '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories/{directory_id}/users.md':
      return <ListUsers />;
    case '@site/src/pages/apis/embeds/tag/Directory/get/api/v1/organizations/{organization_id}/directories/{id}.md':
      return <GetDirectory />;
    case '@site/src/pages/apis/embeds/tag/Directory/patch/api/v1/organizations/{organization_id}/directories/{id}:disable.md':
      return <DisableDirectory />;
    case '@site/src/pages/apis/embeds/tag/Directory/patch/api/v1/organizations/{organization_id}/directories/{id}:enable.md':
      return <EnableDirectory />;
    case '@site/src/pages/apis/embeds/tag/M2M/post/api/v1/organizations/{organization_id}/clients.md':
      return <CreateM2MClients />;
    case '@site/src/pages/apis/embeds/tag/M2M/get/api/v1/organizations/{organization_id}/clients/{client_id}.md':
      return <GetM2MClients />;
    case '@site/src/pages/apis/embeds/tag/M2M/patch/api/v1/organizations/{organization_id}/clients/{client_id}.md':
      return <UpdateM2MClients />;
    case '@site/src/pages/apis/embeds/tag/M2M/delete/api/v1/organizations/{organization_id}/clients/{client_id}.md':
      return <DeleteM2MClients />;
    case '@site/src/pages/apis/embeds/tag/M2M/post/api/v1/organizations/{organization_id}/clients/{client_id}/secrets.md':
      return <CreateM2MClientSecret />;
    case '@site/src/pages/apis/embeds/tag/M2M/delete/api/v1/organizations/{organization_id}/clients/{client_id}/secrets/{secret_id}.md':
      return <DeleteM2MClientSecret />;
    default:
      return <></>;
  }
};
