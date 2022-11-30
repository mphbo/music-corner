interface IKeys {
  pgUser: string;
  pgHost: string;
  pgDatabase: string;
  pgPassword: string;
  pgPort: number | undefined;
  cloudName: string;
  cloudApiKey: string;
  cloudApiSecret: string;
}

export default <IKeys>{
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT,

  cloudName: process.env.NEXT_PUBLIC_CLOUD_NAME,
  cloudApiKey: process.env.CLOUD_API_KEY,
  cloudApiSecret: process.env.CLOUD_API_SECRET,

  nextAuthSecret: process.env.NEXTAUTH_SECRET,
};
