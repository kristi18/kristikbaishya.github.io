import { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter, 
  FaMediumM 
} from "react-icons/fa";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(5, "Subject must be at least 5 characters."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message Sent",
        description: "Thank you for your message! I will get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold bg-gradient-text">
              Get in Touch
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded mx-auto mt-2 mb-8"></div>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Interested in collaborating or discussing AI opportunities? Let's connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-8">
                <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="How can I help you?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              className="resize-none" 
                              rows={5} 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"} 
                      <FaEnvelope className="ml-2" />
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                    Contact Information
                  </h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                        <FaMapMarkerAlt className="text-primary dark:text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-800 dark:text-white">
                          Location
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">New York, NY</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                        <FaEnvelope className="text-primary dark:text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-800 dark:text-white">
                          Email
                        </h4>
                        <a
                          href="mailto:kristibaishya@gmail.com"
                          className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                          kristibaishya@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mr-4">
                        <FaPhone className="text-primary dark:text-primary" />
                      </div>
                      <div>
                        <h4 className="text-base font-medium text-gray-800 dark:text-white">
                          Phone
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300">(412) 706-4059</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white dark:bg-gray-800">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold text-gray-800 dark:text-white mb-6">
                    Connect with Me
                  </h3>

                  <div className="flex space-x-6">
                    <a
                      href="https://linkedin.com/in/kristibaishya"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-2">
                        <FaLinkedinIn className="text-xl text-primary dark:text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        LinkedIn
                      </span>
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-2">
                        <FaGithub className="text-xl text-primary dark:text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        GitHub
                      </span>
                    </a>

                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-2">
                        <FaTwitter className="text-xl text-primary dark:text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        Twitter
                      </span>
                    </a>

                    <a
                      href="https://medium.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mb-2">
                        <FaMediumM className="text-xl text-primary dark:text-primary" />
                      </div>
                      <span className="text-sm font-medium text-gray-800 dark:text-white">
                        Medium
                      </span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
