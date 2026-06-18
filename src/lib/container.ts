import { createApiClient } from './http-client.js';
import { MerakiService } from './meraki-service.js';

const apiClient = createApiClient();

export const merakiService = new MerakiService(apiClient);
