package com.app.vidhun;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import androidx.activity.EdgeToEdge;
import androidx.appcompat.app.AppCompatActivity;
import androidx.core.graphics.Insets;
import androidx.core.view.ViewCompat;
import androidx.core.view.WindowInsetsCompat;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.OnSuccessListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.auth.AuthResult;
import com.google.firebase.auth.FirebaseAuth;

import org.checkerframework.checker.nullness.qual.NonNull;

public class Signup extends AppCompatActivity {

    FirebaseAuth mAuth;
    EditText Email, Password, Name;
    Button Login, SignUp;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        EdgeToEdge.enable(this);
        setContentView(R.layout.activity_signup2);

        mAuth = FirebaseAuth.getInstance();

        Email = findViewById(R.id.Email);
        Name = findViewById(R.id.Name);
        Password = findViewById(R.id.Password);

        Login = findViewById(R.id.Login);
        SignUp = findViewById(R.id.SignUp);


        SignUp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                String email, pass, name;
                email = Email.getText().toString();
                pass = Password.getText().toString();
                name = Name.getText().toString();


                Users users=new Users();
                users.setEmail(email);
                users.setPass(pass);
                users.setName(name);



                mAuth.createUserWithEmailAndPassword(email, pass).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
                    private FirebaseFirestore db;

                    @Override
                    public void onComplete(@NonNull Task<AuthResult> task) {
                        if (task.isSuccessful()) {
                            //success
                            db.collection("User")
                                    .document().set(users)
                                           .addOnSuccessListener(new OnSuccessListener<Void>(){
                                               @Override
                                               public  void onSuccess(Void avoid){
                                                              startActivity(new Intent(Signup.this,Login.class));

                                               }

                                           });

                            Toast.makeText(Signup.this, "Account is Created", Toast.LENGTH_SHORT).show();

                        } else {
                            Toast.makeText(Signup.this, task.getException().getLocalizedMessage(), Toast.LENGTH_SHORT).show();

                        }
                    }


                });


                ViewCompat.setOnApplyWindowInsetsListener(findViewById(R.id.main), (v, insets) -> {
                    Insets systemBars = insets.getInsets(WindowInsetsCompat.Type.systemBars());
                    v.setPadding(systemBars.left, systemBars.top, systemBars.right, systemBars.bottom);
                    return insets;
                });
            }
        });
    }
}