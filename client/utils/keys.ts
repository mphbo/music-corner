interface IKeys {
  pgUser: string;
  pgHost: string;
  pgDatabase: string;
  pgPassword: string;
  pgPort: number | undefined;
}

export default <IKeys>{
  pgUser: process.env.PGUSER,
  pgHost: process.env.PGHOST,
  pgDatabase: process.env.PGDATABASE,
  pgPassword: process.env.PGPASSWORD,
  pgPort: process.env.PGPORT,
};
