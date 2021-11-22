// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8082'
};

const url = 'http://localhost:8082/';

export const API = {
  /** User **/

  GET_EMPLOYEES: `${url}user/list`,
  SET_EMPLOYEE: `${url}user/add`,
  GET_EMPLOYEE_USERNAME: `${url}user/get`,
  UPDATE_EMPLOYEE: `${url}user/update`,
  DELETE_EMPLOYEE: `${url}user/delete`,
  RESET_PASSWORD: `${url}user/resetpassword`,
  UPDATE_PROFILE_IMAGE: `${url}user/updateProfileImage`,
  LOGIN: `${url}user/login`,
  REGISTER: `${url}user/register`,
}
