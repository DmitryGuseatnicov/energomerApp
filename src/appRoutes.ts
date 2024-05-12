export const appRoutes = {
  about: () => '/about',

  amiSystem: (name?: string) => `/AMI-SYSTEM/${name ?? ''}`,

  smartElectricityMeters: (name?: string) => `/SMART-ELECTRICITY-METERS/${name ?? ''}`,
  software: () => '/SOFTWARE',
  testPage: () => '/testPage',
};
