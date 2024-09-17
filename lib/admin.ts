// import { auth } from "@clerk/nextjs/server";

// export const isAdmin = () => {
//   const { userId } = auth();

//   if (!userId) return false;

//   return process.env.ADMIN_ID === userId ? true : false;
// };

import { auth } from "@clerk/nextjs/server";

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) return false;

  const adminIds = process.env.ADMIN_ID!.split(",");

  return adminIds.includes(userId);
};
// import { auth } from "@clerk/nextjs/server";

// const adminIds = ["user_2h2dH4yGUKhsRp7vklKvxG2ygOW"];
// export const isAdmin = () => {
//   const { userId } = auth();

//   if (!userId) return false;

//   return adminIds.indexOf(userId) !== -1;
// };
// import { auth } from "@clerk/nextjs/server";

// export const isAdmin = () => {
//   const { userId } = auth();

//   if (!userId) return false;

//   // Read the admin IDs from the environment variable and split them into an array
//   const adminIds =
//     process.env.ADMIN_IDS!.split(",") || "user_2h2dH4yGUKhsRp7vklKvxG2ygOW";
//   return adminIds;
// };
