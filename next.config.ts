import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["backend.ligadecapitanes.com.ar"],
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
