import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import accuracy_score, classification_report
import joblib

# Generate synthetic dataset
np.random.seed(42)
n_samples = 300

df = pd.DataFrame({
    'age': np.random.randint(60, 90, size=n_samples),
    'M/F': np.random.choice(['M', 'F'], size=n_samples),
    'eTIV': np.random.normal(loc=1500, scale=100, size=n_samples),
    'nWBV': np.random.normal(loc=0.75, scale=0.05, size=n_samples),
    'ASF': np.random.normal(loc=1.2, scale=0.1, size=n_samples),
    'CDR': np.random.choice([0.0, 0.5, 1.0], size=n_samples),
    'Group': np.random.choice(['Demented', 'Nondemented'], size=n_samples, p=[0.4, 0.6])
})

# Encode categorical variables
df['M/F'] = LabelEncoder().fit_transform(df['M/F'])         # 0 = F, 1 = M
df['Group'] = (df['Group'] == 'Demented').astype(int)       # 1 = Demented, 0 = Nondemented

# Define features and target
features = ['age', 'M/F', 'eTIV', 'nWBV', 'ASF', 'CDR']
X = df[features]
y = df['Group']

# Split into train and test
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train model
print("Training logistic regression model...")
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)

# Evaluate
y_pred = model.predict(X_test)
print("\nEvaluation Metrics:")
print("Accuracy:", accuracy_score(y_test, y_pred))
print(classification_report(y_test, y_pred))

# Save the model
joblib.dump(model, "alzheimers_model.pkl")
print("\nModel saved as alzheimers_model.pkl")
