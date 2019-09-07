export interface IIssue {
  title: string;
  description: string;
  impact: string;
  remediation: string;
  cvss_vector: string;
  cvss_vector_url: string;
  other_refs: string;
  other_refs_url: string;
  technical_details: string;
  current_status: string;
}