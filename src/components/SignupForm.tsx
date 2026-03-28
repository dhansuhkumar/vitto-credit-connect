import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const API_BASE = "https://vitto-c61w.onrender.com";

const SignupForm = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [token, setToken] = useState("");
  const { toast } = useToast();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");

  const [orgName, setOrgName] = useState("");
  const [orgType, setOrgType] = useState("");
  const [city, setCity] = useState("");
  const [loanBook, setLoanBook] = useState("");

  const handleError = (msg: string) => {
    toast({ title: "Error", description: msg, variant: "destructive" });
  };

  const handleSendOtp = async () => {
    if (!email || !phone) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Failed to send OTP");
      }
      setOtpSent(true);
    } catch (e: any) {
      handleError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, phone, otp }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Invalid OTP");
      }
      const data = await res.json();
      setToken(data.token);
      setStep(2);
    } catch (e: any) {
      handleError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitOrg = async () => {
    if (!orgName || !orgType || !city) return;
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          institution_name: orgName,
          institution_type: orgType,
          city,
          loan_book_size: loanBook,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Submission failed");
      }
      setStep(3);
    } catch (e: any) {
      handleError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Step indicator */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className="flex items-center gap-2 flex-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                step >= s
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground"
              }`}
            >
              {step > s ? <CheckCircle2 size={14} /> : s}
            </div>
            {s < 3 && (
              <div
                className={`flex-1 h-px transition-colors duration-300 ${
                  step > s ? "bg-primary" : "bg-border"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step 1: Email + Phone + OTP */}
      {step === 1 && (
        <div className="animate-fade-in space-y-5">
          <div>
            <h2 className="text-2xl font-bold mb-1">Verify your identity</h2>
            <p className="text-sm text-muted-foreground">We'll send a one-time code to confirm.</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="email" className="text-sm mb-1.5 block">Work Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@institution.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={otpSent}
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-sm mb-1.5 block">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                disabled={otpSent}
              />
            </div>
          </div>

          {!otpSent ? (
            <Button
              variant="hero"
              className="w-full"
              onClick={handleSendOtp}
              disabled={loading || !email || !phone}
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : "Send OTP"}
            </Button>
          ) : (
            <div className="space-y-4 animate-fade-in">
              <div>
                <Label htmlFor="otp" className="text-sm mb-1.5 block">Enter OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="6-digit code"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </div>
              <Button
                variant="hero"
                className="w-full gap-2"
                onClick={handleVerifyOtp}
                disabled={loading || otp.length < 6}
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : <>Verify OTP <ArrowRight size={14} /></>}
              </Button>
            </div>
          )}
        </div>
      )}

      {/* Step 2: Organisation Details */}
      {step === 2 && (
        <div className="animate-fade-in space-y-5">
          <div>
            <h2 className="text-2xl font-bold mb-1">Organisation details</h2>
            <p className="text-sm text-muted-foreground">Tell us about your institution.</p>
          </div>

          <div className="space-y-4">
            <div>
              <Label htmlFor="orgName" className="text-sm mb-1.5 block">Institution Name</Label>
              <Input
                id="orgName"
                placeholder="e.g. Axis Finance Ltd."
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>
            <div>
              <Label className="text-sm mb-1.5 block">Institution Type</Label>
              <Select value={orgType} onValueChange={setOrgType}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bank">Bank</SelectItem>
                  <SelectItem value="nbfc">NBFC</SelectItem>
                  <SelectItem value="mfi">MFI</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="city" className="text-sm mb-1.5 block">City</Label>
              <Input
                id="city"
                placeholder="e.g. Mumbai"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="loanBook" className="text-sm mb-1.5 block">Approximate Loan Book Size</Label>
              <Input
                id="loanBook"
                placeholder="e.g. ₹500 Cr"
                value={loanBook}
                onChange={(e) => setLoanBook(e.target.value)}
              />
            </div>
          </div>

          <Button
            variant="hero"
            className="w-full gap-2"
            onClick={handleSubmitOrg}
            disabled={loading || !orgName || !orgType || !city}
          >
            {loading ? <Loader2 size={16} className="animate-spin" /> : <>Submit <ArrowRight size={14} /></>}
          </Button>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="animate-fade-in text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
            <CheckCircle2 size={32} className="text-primary" />
          </div>
          <h2 className="text-2xl font-bold mb-3">You're on the list.</h2>
          <p className="text-muted-foreground leading-relaxed">
            Our team will reach out within 24 hours.
          </p>
        </div>
      )}
    </div>
  );
};

export default SignupForm;
