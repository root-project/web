import ROOT

# Load the data set
df = ROOT.RDataFrame("Events", "Run2012BC_DoubleMuParked_Muons.root")

# Select only events with two oppositely-charged muons
df_2mu = df.Filter("nMuon == 2 && Muon_charge[0] != Muon_charge[1]")

# Compute invariant mass of the dimuon system
df_mass = df_2mu.Define(
    "Dimuon_mass", "InvariantMass(Muon_pt, Muon_eta, Muon_phi, Muon_mass)"
)

# Select events within the J/psi mass spectrum
df_jpsi = df_mass.Filter("Dimuon_mass > 2.95 && Dimuon_mass < 3.25")

# Make histogram of dimuon mass spectrum
hist = df_jpsi.Histo1D(
    (
        "Dimuon_mass",
        "Subset of CMS Run 2010B: J/#psi window;#mu#mu mass [GeV];Events",
        128, 2.95, 3.25,
    ),
    "Dimuon_mass",
)

c = ROOT.TCanvas("c", "", 800, 700)
hist.Draw()
