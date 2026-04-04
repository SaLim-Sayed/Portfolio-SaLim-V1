/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // FlowCV / Skia PDFs often draw blank in Chrome’s inline viewer; attachment
        // encourages opening with Preview/Adobe where they usually render correctly.
        source: "/CV.pdf",
        headers: [
          { key: "Content-Type", value: "application/pdf" },
          {
            key: "Content-Disposition",
            value: 'attachment; filename="SalimSayed-CV.pdf"',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
