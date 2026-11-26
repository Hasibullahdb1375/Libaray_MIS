import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Main {

    public static void main(String[] args) {

        String str="dad";

        String reversed =new StringBuffer(str).reverse().toString();
        if(str.equals(reversed)){
            System.out.println("palindrome");
        }
        else
            System.out.println("not palindrome");
        }
    }
