import {
  ShieldCheck,
  Lock,
  KeyRound,
  Languages,
  Bell,
  Shield,
  Link2,
  FileText,
  Info,
  Headset,
} from "lucide-react";

import ProfileItem from "./ProfileItem";

export default function ProfileMenu({
  onOpenKYC,
  onOpenLanguage,
}) {
  return (
    <>
      <ProfileItem
        icon={ShieldCheck}
        title="KYC Verification"
        subtitle="Verify your identity"
        color="#3B82F6"
        onClick={onOpenKYC}
      />

      <ProfileItem
        icon={Lock}
        title="Fund Password"
        subtitle="Protect withdrawals"
        color="#8B5CF6"
        onClick={() => {}}
      />

      <ProfileItem
        icon={KeyRound}
        title="Login Password"
        subtitle="Change your password"
        color="#2563EB"
        onClick={() => {}}
      />

      <ProfileItem
        icon={Languages}
        title="Language"
        subtitle="Choose your language"
        color="#06B6D4"
        onClick={onOpenLanguage}
      />

      <ProfileItem
        icon={Bell}
        title="Notification Settings"
        subtitle="Manage alerts"
        color="#F59E0B"
        onClick={() => {}}
      />

      <ProfileItem
        icon={Shield}
        title="Security Center"
        subtitle="Protect your account"
        color="#10B981"
        onClick={() => {}}
      />

      <ProfileItem
        icon={Link2}
        title="Account Binding"
        subtitle="Email • Phone • Google"
        color="#6366F1"
        onClick={() => {}}
      />

      <ProfileItem
        icon={FileText}
        title="Terms of Service"
        subtitle="Read our policies"
        color="#64748B"
        onClick={() => {}}
      />

      <ProfileItem
        icon={Info}
        title="About SafeTrade"
        subtitle="Version & information"
        color="#0EA5E9"
        onClick={() => {}}
      />

      <ProfileItem
        icon={Headset}
        title="Contact Support"
        subtitle="24/7 Customer Service"
        color="#EC4899"
        onClick={() => {}}
      />
    </>
  );
}
